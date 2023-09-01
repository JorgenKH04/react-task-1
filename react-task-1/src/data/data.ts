import "../png.d.ts";
import * as streamsyncImg from "../assets/project-images/Streamsync.png";
import * as ecotrackImg from "../assets/project-images/ecotrack.png";
import * as mindmentorImg from "../assets/project-images/mindmentor.png";
import * as fitquest from "../assets/project-images/fitquest.png";
import * as greenguru from "../assets/project-images/greenguru.png";
import * as techtutor from "../assets/project-images/techtutor.png";

export const projects = [
	{
		key: 1,
		name: "Streamsync",
		info: `StreamSync is an innovative
               streaming platform that synchronizes
               multiple video streams in real-time.`,
		image: streamsyncImg,
	},
	{
		key: 2,
		name: "EcoTrack",
		info: `EcoTrack is a mobile application designed
               to promote sustainable living and reduce
               carbon footprints.`,
		image: ecotrackImg,
	},
	{
		key: 3,
		name: "MindMentor",
		info: `MindMentor is a mental health and well-being
		       application that offers personalized guidance
			   and support.`,
		image: mindmentorImg,
	},
	{
		key: 4,
		name: "FitQuest",
		info: `FitQuest is a fitness tracking and
		       goal-setting application.`,
		image: fitquest,
	},
	{
		key: 5,
		name: "GreenGuru",
		info: `GreenGuru is a comprehensive gardening
		       and plant care application.`,
		image: greenguru,
	},
	{
		key: 6,
		name: "TechTutor",
		info: `TechTutor is an interactive learning
		       platform focused on technology and
			   computer science education.`,
		image: techtutor,
	},
];
