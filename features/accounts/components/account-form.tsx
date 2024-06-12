import { z } from "zod"
import { Trash } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { insertAccountSchema } from "@/db/schema"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = insertAccountSchema.pick({
    name: true
})

type FormValues = z.input<typeof formSchema>

type FormProps = {
    id?: string,
    defaultValues?: FormValues,
    onSubmit?: (values: FormValues) => void,
    onDelete?: () => void,
    disabled?: boolean
}

export default function AccountForm({
    id, defaultValues, onSubmit, onDelete, disabled
}: FormProps) {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues
    })

    const handleSubmit = (values: FormValues) => {
        onSubmit(values)
    }

    const handleDelete = () => {
        onDelete?.()
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-6 pt-6"
            >
                <FormField
                    name="name"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Account Name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    disabled={disabled}
                                    placeholder="e.g Camp Meeting, Development, Dorcas"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button
                    type='submit'
                    className="w-full"
                    disabled={disabled}
                >
                    {id ? "Save Changes" : "Create Account"}
                </Button>

                {!!id && (
                    <Button
                        type='button'
                        variant="destructive"
                        disabled={disabled}
                        onClick={handleDelete}
                        className="w-full flex items-center space-x-2"
                    >
                        <Trash className="size-4" />
                        <span>Delete Account</span>
                    </Button>
                )}

            </form>
        </Form>
    )
}



























