import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Sun, DarkMode } from '@icon-park/react'

export const ColorModeToggle = () => {
	const { toggleColorMode } = useColorMode()
	const text = useColorModeValue('dark', 'light')
	const SwitchIcon = useColorModeValue(
		<DarkMode theme="outline" size="24" />,
		<Sun theme="outline" size="24" />
	)
	const handleToggleColorMode = () => {
		toggleColorMode()
	}

	return (
		<>
			<IconButton
				size="md"
				fontSize="lg"
				aria-label={`Switch to ${text} mode`}
				variant="ghost"
				color="current"
				onClick={handleToggleColorMode}
				icon={SwitchIcon}
			/>
		</>
	)
}

