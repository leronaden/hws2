import Radio from '@mui/material/Radio';
import RadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup';



import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react'
import s from './SuperRadio.module.css'
import {FormControlLabel} from "@mui/material";

type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>

type SuperRadioPropsType = Omit<RadioGroupProps, 'onChange'> & {
    options?: any[];
    value?: any; // Добавлено свойство value
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangeOption?: (option: any) => void;
    spanProps?: DefaultSpanPropsType;
};



const SuperRadio: React.FC<SuperRadioPropsType> = ({
    id,
    name,
    className,
    options,
    value,
    onChange,
    onChangeOption,
    spanProps,
    ...restProps
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedRadio = e.target.value;
        if (onChangeOption) {
            onChangeOption(selectedRadio);
        }
    };

    const finalRadioClassName = s.radio + (className ? ' ' + className : '')
    const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')

    const mappedOptions: any[] = options
        ? options.map((o) => (
              <label key={name + '-' + o.id} className={s.label}>
                  <RadioGroup
                      aria-labelledby="radio"
                      id={id + '-input-' + o.id}
                      className={finalRadioClassName}
                      name={name}
                      value={value}
                      onChange={onChangeCallback}
                      {...restProps}
                  >
                      <FormControlLabel value={o.id} control={<Radio />} label={o.value} />
                  </RadioGroup>


                  <span
                      id={id + '-span-' + o.id}
                      {...spanProps}
                      className={spanClassName}
                  >

                  </span>
              </label>
          ))
        : []

    return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio
