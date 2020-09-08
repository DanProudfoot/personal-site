import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

import style from './tod.module.css';

const variants = {
	hi: {
		initial: {
			y: '-50%',
			opacity: 0
		},
		enter: {
			y: '0%',
			opacity: 1,
			textShadow: `6px 6px 0px rgba(0,0,0,0.1)`,

			transition: {
				delay: 0.4,
				y: {},
				opacity: {
					duration: 0.2
				},
				textShadow: {
					delay: 0.8
				}
			}
		}
	},
	time: {
		initial: {
			y: '-50%',
			opacity: 0
		},
		enter: {
			y: '0%',
			opacity: 1,
			textShadow: `6px 6px 0px rgba(0,0,0,0.2)`,
			transition: {
				delay: 0.1,
				y: {},
				opacity: {
					duration: 0.2
				},
				textShadow: {
					delay: 0.8
				}
			}
		}
	}
};

export function TimeOfDay() {
	const time = useMemo(() => {
		const date = new Date();
		const hour = date.getHours();

		switch (true) {
			case hour >= 20:
				return "Nice night, isn't it?";

			case hour >= 18:
				return 'Good Evening!';

			case hour >= 12:
				return 'Good Afternoon!';

			case hour >= 6:
				return 'Good Morning!';

			case hour >= 2:
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
