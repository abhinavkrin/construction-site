
import React, { useRef } from 'react';
import '../../assets/styles/TextField.scss';

function TextArea({onChange,value,placeholder,id,style,label,maxLength}){
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
            style={style}
            onClick={e=>{
                if(ref.current){
                    ref.current.focus();
                }
            }}>
            <div className="form-field__control">
                <textarea id={id} 
                    className="form-field__textarea" 
                    value={value}
                    ref={ref} 
                    placeholder={placeholder} 
                    onChange={onChange}
                    maxLength={maxLength}
                    onBlur={(e) => setActive(e.target, false)}
                    onFocus={e => setActive(e.target, true)}></textarea>
                <label htmlFor={id} className="form-field__label">{label}</label>
                <div className="form-field__bar"></div>
            </div>
        </div>
    )
}

export default TextArea;