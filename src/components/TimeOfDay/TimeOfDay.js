import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

import style from './tod.module.css';

const variants = {
	hi: {
		initial: {
			x: '-50%',
			opacity: 0
		},
		enter: {
			x: '0%',
			opacity: 1,
			transition: {
				duration: 2
			}
		}
	},
	time: {
		initial: {
			x: '-20%',
			opacity: 0
		},
		enter: {
			x: '0%',
			opacity: 1,
			transition: {
				duration: 1.8,
				delay: 1.5
			}
		}
	}
};

export default function TimeOfDay() {
	const time = useMemo(() => {
		const date = new Date();
		const hour = date.getHours();

		switch (true) {
			case hour > 20:
				return "Nice night, isn't it?";

			case hour > 18:
				return 'Good Evening!';

			case hour > 12:
				return 'Good Afternoon!';

			case hour > 6:
				return 'Good Morning!';

			case hour > 3:
				return 'Why are you awake?!?';

			default:
				return "Nice night, isn't it?";
		}
	}, []);

	return (
		<h1 className={style.heading}>
			<motion.span
				variants={variants.hi}
				initial="initial"
				animate="enter"
				className={style.hi}
			>
				Hi,
			</motion.span>
			<motion.span
				variants={variants.time}
				initial="initial"
				animate="enter"
			>
				{time}
			</motion.span>
		</h1>
	);
}
