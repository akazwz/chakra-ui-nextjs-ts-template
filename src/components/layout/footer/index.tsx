import { Box, HStack, Stack } from '@chakra-ui/react'

import { Copyright } from './Copyright'
import { Logo } from '../../Logo'
import { SocialMediaLinks } from './SocialMediaLinks'

export const Footer = () => (
	<Box
		as="footer"
		mx="auto"
		maxW="7xl"
		py="12"
		px={{ base: '4', md: '8' }}
	>
		<Stack>
			<Stack direction="row" spacing="4" align="center" justify="space-between">
				<HStack>
					<Logo size="21px" />
					<Copyright name={'NEXT'} alignSelf={{ base: 'center', sm: 'start' }} />
				</HStack>
				<SocialMediaLinks />
			</Stack>
		</Stack>
	</Box>
)