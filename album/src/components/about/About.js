import React from "react";
import * as style from "./about.module.css";
import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import { PortableText } from "@portabletext/react";

const components = {
	marks: {
		blockLink: ({ value, children }) => {
			switch (value.type) {
				case "external":
					return (
							<a href={value?.link} target="_blank" rel="noopener noreferrer">
								{children}
							</a>
					);
				case "telephone":
					return (
							<a href={`tel:${value?.link}`}>{children}</a>
					);
				case "email":
					return (
							<a href={`mailto:${value?.link}`}>{children}</a>
					);
				default:
					return null;
			}
		},
	},
};

const About = ({ about }) => {
	const { sanityAbout } = useStaticQuery(getData);
	return (
		<motion.div
			className={style.about}
			initial={{ y: "-100%" }}
			animate={{ y: about ? 0 : "-100%" }}
			transition={{ duration: 3, type: "spring", stiffness: 50 }}
		>
			<div className={style.overflow}></div>
			<div className={style.wrapper}>
                <PortableText value={sanityAbout._rawText} components={components} />
			</div>
		</motion.div>
	);
};

export default About;

const getData = graphql`
	{
		sanityAbout {
			_rawText
		}
	}
`;
