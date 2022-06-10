import { Center, Heading } from '@chakra-ui/react'

import { Layout } from '../src/components/layout'

import type { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<Layout>
			<Center>
				<Heading>
					Home
				</Heading>
			</Center>
		</Layout>
	)
}

export default Home
