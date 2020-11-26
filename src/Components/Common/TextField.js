import React, { useRef } from 'react';
import '../../assets/styles/TextField.scss';

function TextField({onChange,value,placeholder,id,style,label,maxLength}){

    const setActive = (el, active) => {
        const formField = el.parentNode.parentNode
        if (active) {
          formField.classList.add('form-field--is-active')
        } else {
          formField.classList.remove('form-field--is-active')
          el.value === '' ? 
            formField.classList.remove('form-field--is-filled') : 
            formField.classList.add('form-field--is-filled')
        }
    }

    const ref = useRef();

    return (
        <div className="form-field"
            onClick={e=>{
                if(ref.current){
                    ref.current.focus();
                }
            }} 
            style={style}>
            <div className="form-field__control">
                <input id={id}
                    ref={ref} 
                    type="text" className="form-field__input" 
                    value={value} 
                    placeholder={placeholder} 
                    onChange={onChange}
                    onBlur={(e) => setActive(e.target, false)}
                    maxLength={maxLength}
                    onFocus={e => setActive(e.target, true)}
                    />
                <label for={id} className="form-field__label">{label}</label>
                <div className="form-field__bar"></div>
            </div>
        </div>
    )
}

export default TextField;