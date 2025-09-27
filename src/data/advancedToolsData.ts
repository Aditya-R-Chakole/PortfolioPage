import location from "../data/location.png";
import nationality from "../data/nationality.png";
import calendar  from "../data/calendar.png";
import interests from "../data/interests.png";

export interface AdvancedFeature {
  readonly id: string;
  readonly text: string;
  readonly icon: string;
}

export const advancedToolsData = {
  features: [
    { id: 'preview', text: 'Location', description: 'Bengaluru, India', icon: location },
    { id: 'variations', text: 'Nationality', description: 'Indian', icon: nationality },
    { id: 'contrast', text: 'Age', description: '25', icon: calendar },
    { id: 'accessibility', text: 'Interests', description: 'Video Games, Cricket', icon: interests },
  ]
} as const;
