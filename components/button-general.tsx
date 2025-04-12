import { ReactNode } from "react"
import { Pressable } from "react-native"

export const ButtonGeneral = ({ children, onPress }: { children: ReactNode, onPress: () => void }) => {
    return (
        <Pressable onPress={onPress} className="bg-gray-200 rounded-lg p-5">
            {children}
        </Pressable>
    )
}