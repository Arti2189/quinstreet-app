import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, type FormData } from "../../schemas/formSchema";
import { Input } from "../Input";
import { Button } from "../Button";
import { toast } from "react-toastify";
import {
    FormContainer,
    FormContent,
    FormHeader,
    FormTitle,
} from "./Form.styles";
import { PhoneInput } from "../Input/PhoneInput";
import { Flex } from "../shared/shared.styles";
import { useFormSubmit } from "../../hooks";

export const Form: React.FC = () => {
    const { submitForm, isSubmitting, isSubmitted } = useFormSubmit();

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            city: "",
            state: "",
            phone: "",
            email: "",
        },
    });

    const onSubmit = async (data: FormData) => {
        if (!isSubmitted) {
            try {
                await submitForm(data);
                reset();
            } catch {
                toast.success(`Form Submission Failed`);
            }
        }
    };

    return (
        <FormContainer>
            <FormHeader>
                <FormTitle>
                    Enter to win a 3rd generation Nest Learning Thermostat worth
                    $249.
                </FormTitle>
            </FormHeader>
            <FormContent onSubmit={handleSubmit(onSubmit)}>
                <Flex.Root>
                    <Flex.Item>
                        <Input
                            name="name"
                            control={control}
                            placeholder="Name"
                            error={errors.name}
                        />
                    </Flex.Item>
                    <Flex.Item>
                    <Flex.Root direction="row">
                        <Flex.Item flex={2}>
                            <Input
                                name="city"
                                control={control}
                                placeholder="City"
                                error={errors.city}
                            />
                        </Flex.Item>
                        <Flex.Item>
                            <Input
                                name="state"
                                control={control}
                                placeholder="State"
                                error={errors.state}
                            />
                        </Flex.Item>
                    </Flex.Root>
                    </Flex.Item>
                    <Flex.Item>
                        <PhoneInput
                            name="phone"
                            control={control}
                            error={errors.phone}
                        />
                    </Flex.Item>
                    <Flex.Item>
                        <Input
                            name="email"
                            control={control}
                            placeholder="Email Address"
                            type="email"
                            error={errors.email}
                        />
                    </Flex.Item>
                    <Flex.Item>
                        <Button
                            type="submit"
                            isSubmitting={isSubmitting}
                            isSubmitted={isSubmitted}
                        >
                            ENTER TO WIN
                        </Button>
                    </Flex.Item>
                </Flex.Root>
            </FormContent>
        </FormContainer>
    );
};
