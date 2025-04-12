import { ButtonAction } from "@/components/button-action";
import { ButtonCard } from "@/components/button-card";
import { ButtonGeneral } from "@/components/button-general";
import { Header } from "@/components/header";
import { ScrollView, Text, View } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome6';

export default function Screen() {
    return (
        <ScrollView className="h-screen bg-white">
            <Header />

            <ButtonCard title="Conta" onPress={() => {}}>
                <Text className="text-2xl font-semibold">R$ 1.000,00</Text>
            </ButtonCard>

            <ScrollView horizontal className="px-3" showsHorizontalScrollIndicator={false}>
                <ButtonAction icon="pix" label="Pix" onPress={() => {}}/>
                <ButtonAction icon="barcode" label="Pagar" onPress={() => {}} badge="R$ 12.300"/>
                <ButtonAction icon="hand-holding-dollar" label="Pegar emprestado" onPress={() => {}}/>
                <ButtonAction icon="money-bill-transfer" label="Transferir" onPress={() => {}}/>
                <ButtonAction icon="receipt" label="Dinheiro" onPress={() => {}}/>
            </ScrollView>

            <View className="px-4 py-6">
                <ButtonGeneral onPress={() => { }}>
                    <View className="flex-row items-center">
                        <Icon name="credit-card" size={28} color="black" />
                        <Text className="text-lg font-semibold ml-4">My cards</Text>
                    </View>
                </ButtonGeneral>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
                <View className="w-72 mr-4">
                    <ButtonGeneral onPress={() => { }}>
                        <View className="flex-row flex-wrap gap-x-1">
                            <Text className="text-lg">You have </Text>
                            <Text className="font-semibold">R$12.300,00 </Text>
                            <Text className="text-lg">ready to borrow.</Text>
                        </View>
                    </ButtonGeneral>
                </View>

                <View className="w-72">
                    <ButtonGeneral onPress={() => { }}>
                        <Text className="font-semibold text-nubank text-lg">Save your money here</Text>
                        <Text className="text-lg">Tap to learn more.</Text>
                    </ButtonGeneral>
                </View>
            </ScrollView>

            <View className="w-full h-[2px] bg-gray-100 mt-8"></View>

            <ButtonCard title="Credit card" onPress={() => {}}>
                <Text className="text-lg text-gray-500">Current invoice</Text>
                <Text className="text-2xl font-semibold">R$ 1.094,00</Text>
                <Text className="text-lg text-gray-500">Avaliable limit R$ 5.000</Text>
            </ButtonCard>
        </ScrollView>
    )
}