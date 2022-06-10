import { Text, TextProps } from '@chakra-ui/react'

interface CopyrightProps extends TextProps{
	companyName: string
}

export const Copyright = (props: CopyrightProps) => (
	<Text fontSize="sm" {...props}>
		&copy; {new Date().getFullYear()} {props.companyName}, Inc. All rights reserved.
	</Text>
)