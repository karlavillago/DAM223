import {Text, Image, View, Button} from 'react native';

export const Saludo2= ()=>{
    return(
        <view>
        <Text>Hola Maricruz : desde un componente propio</Text>
         <Image source={require('./assets/wave.png')}></Image>
        <button title="Presiona para saludar"></button>
        </view>
    )
}
