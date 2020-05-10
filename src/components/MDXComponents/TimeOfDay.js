import React, { useMemo } from 'react';

export default function TimeOfDay() {
	const time = useMemo(() => {
		const date = new Date();
		const hour = date.getHours();

		switch (true) {
			case hour > 20:
				return "Nice night, isn't it?";

			case hour > 18:
				return 'Evening!';

			case hour > 12:
				return 'Afternoon!';

			case hour > 6:
				return 'Morning!';

			case hour > 3:
				return 'Why are you still up?!?';

			default:
				return "Nice night, isn't it?";
		}
	}, []);

	return <h1>{time}</h1>;
}
