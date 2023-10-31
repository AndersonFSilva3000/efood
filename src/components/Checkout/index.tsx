import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'

import Button from '../Button'

import { usePurchassMutation } from '../../service/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../store/configureStore'
import { clear, closeCart } from '../store/reducers/reducerCart'

import * as S from './styles'
import { formatPrince, getTotalPrince } from '../../utils'

type Props = {
  handleClick: () => void
}

const Checkout = ({ handleClick }: Props) => {
  const [purchase, { data, isSuccess }] = usePurchassMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [paymentPages, setPaymentPages] = React.useState(false)
  const dispatch = useDispatch()

  const formDelivery = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome deverá ter ao menos 5 caracteres')
        .required('Campo Obrigatório'),
      address: Yup.string()
        .min(5, 'O campo precisa ter ao menos 5 caracteres')
        .required('Campo Obrigatorio'),
      city: Yup.string()
        .min(4, 'O campo precisa ter ao menos 4 caracteres')
        .required('Campo Obrigatorio'),
      zipCode: Yup.string()
        .min(6, 'O campo precisa ter ao menos 6 caracteres')
        .required('Campo Obrigatorio'),
      number: Yup.string()
        .min(1, 'O campo precisa ter ao menos 6 caracteres')
        .required('Campo Obrigatorio'),
      complement: Yup.string()
    }),
    onSubmit: () => {
      setPaymentPages(true)
    }
  })

  const formPayment = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expirationMonth: '',
      expirationYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .min(3, 'O campo precisa ter ao menos 3 caracteres')
        .required('Campo Obrigatorio'),
      cardNumber: Yup.string()
        .min(16, 'O campo precisa ter ao menos 16 caracteres')
        .required('Campo Obrigatorio'),
      cardCode: Yup.string()
        .min(3, 'O campo precisa ter ao menos 3 caracteres')
        .required('Campo Obrigatorio'),
      expirationMonth: Yup.string()
        .min(2, 'O campo precisa ter ao menos 2 caracteres')
        .required('Campo Obrigatorio'),
      expirationYear: Yup.string()
        .min(2, 'O campo precisa ter ao menos 2 caracteres')
        .required('Campo Obrigatorio')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: formDelivery.values.receiver,
          adrress: {
            description: formDelivery.values.address,
            city: formDelivery.values.city,
            zipCode: formDelivery.values.zipCode,
            number: Number(formDelivery.values.number),
            complement: formDelivery.values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expirationMonth),
              year: Number(values.expirationYear)
            }
          }
        },
        // products: []
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const concluded = () => {
    dispatch(clear())
    dispatch(closeCart())
  }

  return (
    <>
      {isSuccess && data ? (
        <S.Form>
          <h4>Pedido realizado {data.orderId}</h4>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.{' '}
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <Button type="submit" onClick={concluded}>
            Concluir
          </Button>
        </S.Form>
      ) : (
        <div>
          <S.Form className={paymentPages ? 'dNone' : ''}>
            <form onSubmit={formDelivery.handleSubmit}>
              <h4>Entrega</h4>
              <label htmlFor="receiver">Quem irá receber</label>
              <S.AlertError>{formDelivery.errors.receiver}</S.AlertError>

              <input
                name="receiver"
                id="receiver"
                type="text"
                onChange={formDelivery.handleChange}
                onBlur={formDelivery.handleBlur}
                className={
                  formDelivery.touched.receiver && formDelivery.errors.receiver
                    ? 'error'
                    : ''
                }
              />

              <label htmlFor="address">Endereço</label>
              <S.AlertError>{formDelivery.errors.address}</S.AlertError>
              <input
                name="address"
                id="address"
                type="text"
                onChange={formDelivery.handleChange}
                onBlur={formDelivery.handleBlur}
                className={
                  formDelivery.touched.address && formDelivery.errors.address
                    ? 'error'
                    : ''
                }
              />

              <label htmlFor="city">Cidade</label>
              <S.AlertError>{formDelivery.errors.city}</S.AlertError>
              <input
                name="city"
                id="city"
                type="text"
                onChange={formDelivery.handleChange}
                onBlur={formDelivery.handleBlur}
                className={
                  formDelivery.touched.city && formDelivery.errors.city
                    ? 'error'
                    : ''
                }
              />
              <S.Row>
                <div>
                  <label htmlFor="zipCode">CEP</label>
                  <S.AlertError>{formDelivery.errors.zipCode}</S.AlertError>
                  <InputMask
                    name="zipCode"
                    id="zipCode"
                    type="text"
                    onChange={formDelivery.handleChange}
                    onBlur={formDelivery.handleBlur}
                    className={
                      formDelivery.touched.zipCode &&
                      formDelivery.errors.zipCode
                        ? 'error'
                        : ''
                    }
                    mask={'99999-999'}
                  />
                </div>
                <div>
                  <label htmlFor="number">Número</label>
                  <S.AlertError>{formDelivery.errors.number}</S.AlertError>
                  <input
                    name="number"
                    id="number"
                    type="text"
                    onChange={formDelivery.handleChange}
                    onBlur={formDelivery.handleBlur}
                    className={
                      formDelivery.touched.number && formDelivery.errors.number
                        ? 'error'
                        : ''
                    }
                  />
                </div>
              </S.Row>
              <label htmlFor="complement">Complemento (opcional)</label>
              <S.AlertError>{formDelivery.errors.complement}</S.AlertError>
              <input
                name="complement"
                id="complement"
                type="text"
                onChange={formDelivery.handleChange}
                onBlur={formDelivery.handleBlur}
                className={
                  formDelivery.touched.complement &&
                  formDelivery.errors.complement
                    ? 'error'
                    : ''
                }
              />
              <S.ContainerButtons>
                <Button
                  type="submit"
                  title="Clique aqui para ir para continuar compra"
                >
                  Continuar com o pagamento
                </Button>
                <Button type="button" onClick={handleClick}>
                  Voltar para o carrinho
                </Button>
              </S.ContainerButtons>
            </form>
          </S.Form>

          <S.Form className={paymentPages ? '' : 'dNone'}>
            <form onSubmit={formPayment.handleSubmit}>
              <h4>
                Pagamento - Valor a pagar {formatPrince(getTotalPrince(items))}
              </h4>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                onChange={formPayment.handleChange}
                onBlur={formPayment.handleBlur}
              />
              <S.Row>
                <div className="maxWidth">
                  <label htmlFor="cardNumber">Número no cartão</label>
                  <InputMask
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    onChange={formPayment.handleChange}
                    onBlur={formPayment.handleBlur}
                    mask={'9999 9999 9999 9999'}
                  />
                </div>
                <div>
                  <label htmlFor="cardCode">CVV</label>
                  <InputMask
                    type="text"
                    id="cardCode"
                    name="cardCode"
                    onChange={formPayment.handleChange}
                    onBlur={formPayment.handleBlur}
                    className="maxWidth"
                    mask={'999'}
                  />
                </div>
              </S.Row>
              <S.Row>
                <div>
                  <label htmlFor="expirationMonth">Mês de vencimento</label>
                  <InputMask
                    type="text"
                    id="expirationMonth"
                    name="expirationMonth"
                    onChange={formPayment.handleChange}
                    onBlur={formPayment.handleBlur}
                    mask={'99'}
                  />
                </div>
                <div>
                  <label htmlFor="expirationYear">Ano de vencimento</label>
                  <InputMask
                    type="text"
                    id="expirationYear"
                    name="expirationYear"
                    onChange={formPayment.handleChange}
                    onBlur={formPayment.handleBlur}
                    mask={'99'}
                  />
                </div>
              </S.Row>
              <S.ContainerButtons>
                <Button type="submit">Finalizar pagamento</Button>
                <Button
                  type="button"
                  onClick={() => setPaymentPages(!paymentPages)}
                >
                  Voltar para a edição de endereço
                </Button>
              </S.ContainerButtons>
            </form>
          </S.Form>
        </div>
      )}
    </>
  )
}

export default Checkout
