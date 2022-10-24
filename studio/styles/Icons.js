import React from "react";
import Emoji from "a11y-react-emoji";

const iconSize = (size) => (size ? { fontSize: "1rem" } : { fontSize: "2rem" });

export const HomepageIcon = (size) => <Emoji style={iconSize(size)} symbol="🏠" />;
export const AlbumIcon = (size) => <Emoji style={iconSize(size)} symbol="💿" />;
export const TimelineIcon = (size) => <Emoji style={iconSize(size)} symbol="⏰" />;
export const AboutIcon = (size) => <Emoji style={iconSize(size)} symbol="📣" />;
export const SeoIcon = (size) => <Emoji style={iconSize(size)} symbol="🚦" />;
export const LinkIcon = (size) => <Emoji style={iconSize(size)} symbol="🔗" />;
export const DayIcon = (size) => <Emoji style={iconSize(size)} symbol="🌕" />;
export const NightIcon = (size) => <Emoji style={iconSize(size)} symbol="🌑" />;
