
export interface BaseComponentProps {

    next: () => void;
    prev: () => void;
    isFirstStep: () => boolean;
    isFinalStep: () => boolean;
  
   

}

export interface onboardingStepsListInterface {
    id: number;
    label: string;
    component: {
        step: React.ComponentType<BaseComponentProps>
    }
}