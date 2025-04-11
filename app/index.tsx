import { ButtonAction } from "@/components/button-action";
import { ButtonCard } from "@/components/button-card";
import { Header } from "@/components/header";
import { Button, ScrollView, StatusBar, Text, View } from "react-native";

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
        </ScrollView>
    )
}