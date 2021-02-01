import React from 'react'

import {ButtonComponentWrapper, ImageStyle, TextStyle} from './ButtonIconWrapper.style'

import oneImage from '../../assets/icons/one.png'

const ButtonIconWrapper = ({btnName, btnColor, onClick, btnId}) => {
    return(
        <ButtonComponentWrapper btnColor={btnColor} onClick={onClick} id={btnId} >
            <ImageStyle  src={oneImage} />
            <TextStyle>
               {btnName}            
            </TextStyle>
        </ButtonComponentWrapper>
    )
}

export default ButtonIconWrapper