import { Pressable, Text, View } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome6';

type Props = {
    icon: string;
    label: string;
    onPress: () => void;
    badge?: string;
}

export const ButtonAction = ({ icon, label, onPress, badge }: Props) => {
    return (
        <Pressable onPress={onPress} className="w-24 mx-1">
            <View className="bg-gray-100 size-24 rounded-full items-center justify-center">
                <Icon name={icon} size={24} color="black" />
            </View>
            {badge &&
                <View className="h-6 -mt-6 bg-nubank p-1 rounded-md">
                    <Text className="text-white text-center font-semibold -mt-1">{badge}</Text>
                </View>
            }
            <Text className="text-md font-semibold mt-4 text-center">{label}</Text>
        </Pressable>
    );
};