import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>
// typ propów dla zwykłego spana
type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: any[]
    onChangeOption?: (option: any) => void

    spanProps?: DefaultSpanPropsType // propy dla spana
}

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
        const selectedOption = e.target.value;
        if (onChangeOption) {
            onChangeOption(selectedOption);
        }
    };

    const finalRadioClassName = s.radio + (className ? ' ' + className : '')
    const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')

    const mappedOptions: any[] = options
        ? options.map((o) => (
            <label key={name + '-' + o.id} className={s.label}>
                <input
                    id={id + '-input-' + o.id}
                    className={finalRadioClassName}
                    type={'radio'}
                    value={o.id}
                    checked={o.id == value}
                    name={name}
                    onChange={onChangeCallback}
                    {...restProps}
                />
                <span
                    id={id + '-span-' + o.id}
                    {...spanProps}
                    className={spanClassName}
                >
                      {o.value}
                  </span>
            </label>
        ))
        : [];

    return <div className={s.options}>{mappedOptions}</div>;
}

export default SuperRadio;
