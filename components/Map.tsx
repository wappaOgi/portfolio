import { Flex } from '@chakra-ui/react';

import dynamic from 'next/dynamic';
import { countries, data } from './utils/countries';

const ResponsiveChoropleth = dynamic(
	() => import('@nivo/geo').then((m) => m.ResponsiveChoropleth),
	{ ssr: false }
);
type PaymentType = {
	amount?: string;
};

export default function WorldMap({ amount }: PaymentType) {
	return (
		<>
			<Flex width={'100%'} height={'600px'} background={'#0c0e15'}>
				<ResponsiveChoropleth
					graticuleLineWidth={0}
					data={data}
					features={countries.features}
					margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
					colors="nivo"
					domain={[0, 1000000]}
					unknownColor="#666666"
					label="properties.name"
					valueFormat=".2s"
					projectionTranslation={[0.5, 0.5]}
					projectionRotation={[0, 0, 0]}
					enableGraticule={true}
					graticuleLineColor="#dddddd"
					borderWidth={0.5}
					borderColor="#152538"
					legends={[
						{
							anchor: 'bottom-left',
							direction: 'column',
							justify: true,
							translateX: 20,
							translateY: -100,
							itemsSpacing: 0,
							itemWidth: 94,
							itemHeight: 18,
							itemDirection: 'left-to-right',
							itemTextColor: '#444444',
							itemOpacity: 0.85,
							symbolSize: 18,
							effects: [
								{
									on: 'hover',
									style: {
										itemTextColor: '#000000',
										itemOpacity: 1,
									},
								},
							],
						},
					]}
				/>
			</Flex>
		</>
	);
}
