import location from "../data/location.png";
import nationality from "../data/nationality.png";
import calendar  from "../data/calendar.png";
import interests from "../data/interests.png";

export interface FeatureLink {
  readonly id: string;
  readonly label: string;
  readonly text: string;
  readonly icon: string;
}

export interface Feature {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly links?: FeatureLink[];
}

export const featuresData: Feature[] = [
  {
    id: 'location',
    title: 'Location:',
    description: 'Bangalore, India',
    icon: location,
  },
  {
    id: 'nationality',
    title: 'Nationality:',
    description: 'Indian',
    icon: nationality,
  },
  {
    id: 'age',
    title: 'Age:',
    description: '25',
    icon: calendar,
  },
  {
    id: 'interests',
    title: 'Interests:',
    description: 'Video Games, Cricket',
    icon: interests,
  },
] as const;
