import { useState } from 'react'

import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'

import * as S from './styles'

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

type Values = {
  // Pode receber um nome dinâmico para o field
  // O field recebe o valor de um boolean ou uma string
  [field: string]: boolean | string
}

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (value: Values) => void
}

const ExploreSidebar = ({
  items,
  onFilter,
  initialValues = {}
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = (name: string, value: string | boolean) => {
    setValues((s) => ({ ...s, [name]: value }))
  }

  const handleFilter = () => {
    onFilter(values)
  }

  return (
    <S.Wrapper>
      {items.map((item) => (
        <div key={item.title}>
          <Heading lineBottom lineColor="secondary" size="small">
            {item.title}
          </Heading>

          {item.type === 'checkbox' &&
            item.fields.map((field) => (
              <Checkbox
                key={field.name}
                name={field.name}
                label={field.label}
                labelFor={field.name}
                isChecked={!!values[field.name]}
                onCheck={(value) => handleChange(field.name, value)}
              />
            ))}

          {item.type === 'radio' &&
            item.fields.map((field) => (
              <Radio
                key={field.name}
                id={field.name}
                value={field.name}
                name={item.name}
                label={field.label}
                labelFor={field.name}
                defaultChecked={field.name === values[item.name]}
                onChange={() => handleChange(item.name, field.name)}
              />
            ))}
        </div>
      ))}

      <Button fullWidth size="medium" onClick={handleFilter}>
        Filtrar
      </Button>
    </S.Wrapper>
  )
}

export default ExploreSidebar
