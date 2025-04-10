import { SafeAreaView, Text, View } from "react-native"
import { ProfileIcon } from "./profile-icon"
import { ButtonIcon } from "./button-icon"

export const Header = () => {
    return (
        <SafeAreaView className="bg-nubank text-white px-4">
            <View className="flex-row justify-between">
                <ProfileIcon/>
                <View className="flex-row">
                    <ButtonIcon icon="eye-slash" onPress={() => {}}/>
                    <ButtonIcon icon="circle-question" onPress={() => {}}/>
                    <ButtonIcon icon="message" onPress={() => {}}/>
                </View>
            </View>
            <View className="py-7">
                <Text className="text-white text-2xl font-semibold ">Hi, Warley</Text>
            </View>
        </SafeAreaView>
    )
}