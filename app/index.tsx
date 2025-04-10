import { Header } from "@/components/header";
import { ScrollView, Text, View } from "react-native";

export default function Screen() {
    return (
        <ScrollView className="h-screen bg-white">
            <Header />
        </ScrollView>
    )
}