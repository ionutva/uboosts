/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Task } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TaskUpdateFormInputValues = {
    id?: number;
    aid?: string;
    title?: string;
    dueDate?: string;
    description?: string;
    tags?: string[];
    isCompleted?: boolean;
    isDeleted?: boolean;
    isImportant?: boolean;
};
export declare type TaskUpdateFormValidationValues = {
    id?: ValidationFunction<number>;
    aid?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    dueDate?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
    isCompleted?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
    isImportant?: ValidationFunction<boolean>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskUpdateFormOverridesProps = {
    TaskUpdateFormGrid?: FormProps<GridProps>;
    id?: FormProps<TextFieldProps>;
    aid?: FormProps<TextFieldProps>;
    title?: FormProps<TextFieldProps>;
    dueDate?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    tags?: FormProps<TextFieldProps>;
    isCompleted?: FormProps<SwitchFieldProps>;
    isDeleted?: FormProps<SwitchFieldProps>;
    isImportant?: FormProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TaskUpdateFormProps = React.PropsWithChildren<{
    overrides?: TaskUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    task?: Task;
    onSubmit?: (fields: TaskUpdateFormInputValues) => TaskUpdateFormInputValues;
    onSuccess?: (fields: TaskUpdateFormInputValues) => void;
    onError?: (fields: TaskUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TaskUpdateFormInputValues) => TaskUpdateFormInputValues;
    onValidate?: TaskUpdateFormValidationValues;
}>;
export default function TaskUpdateForm(props: TaskUpdateFormProps): React.ReactElement;
