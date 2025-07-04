import * as React from 'react';
import { PropsWithChildren } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { 
    StyleSheet,
    Text
} from 'react-native';
import { SafeAreaView } from 'react-native';

type IconsProps = PropsWithChildren<{
    name: string;
}>;

const Icons = ({ name } : IconsProps) => {
    switch (name) {
        case 'circle':
            return <Icon name="circle-thin" size={38} color="#F7CD2E" />;
        case 'cross':
            return <Icon name="times" size={38} color="#38CC77" />;
            
        default:
            return <Icon name="pencil" size={38} color="#0D0D0D" />;
    
    }
}

export default Icons;
