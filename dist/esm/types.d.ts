export interface Props {
    value: string;
    onChange: (value: string) => void;
    error?: boolean;
    helperText?: string;
}
