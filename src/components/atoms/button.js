import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

export const ButtonPrimary = (props) => {
	return <ButtonContainer
        onPress={() => props.onPress()}
        backgroundColor={props.backgroundColor}
    >
        <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
    </ButtonContainer>
}

const ButtonContainer = styled.TouchableOpacity`
    width: 100px;
    padding: 10px;
    border-radius: 5px;    
    background-color: ${props => props.backgroundColor};
`;

const ButtonText = styled.Text`
    font-size: 15px;
    color: ${props => props.textColor};
    text-align: center;
`;

export const StyledText = styled.Text`
	color: #000;
	font-size: 25px;
	font-weight: 300;
	margin:auto;
`;