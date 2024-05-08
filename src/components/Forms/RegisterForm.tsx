import React, { FormEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../Icons';

const RegisterForm: React.FC = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<{ status: boolean, message: string, isFormValidationError: boolean, inputType: string }>({
        status: false,
        message: "",
        isFormValidationError: false,
        inputType: ""
    });
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    useEffect(() => {
        if (username && email) {
            document.getElementById("submitBtn")!.removeAttribute("disabled");
        } else {
            document.getElementById("submitBtn")!.setAttribute("disabled", "disabled");
        }
    }, [username, email]);

    const registerFormData = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        if (error.status) setError({ status: false, message: "", isFormValidationError: false, inputType: "" });

        if (e.currentTarget) {
            let values: { [key: string]: FormDataEntryValue } = {};
            const form = new FormData(e.currentTarget);
            for (var pair of form.entries())
                values[pair[0]] = pair[1];

            if (!values.email.toString().includes('@')) {
                setError({
                    status: true,
                    message: "Enter a valid email address!",
                    isFormValidationError: true,
                    inputType: "email"
                });
                setLoading(false);
            } else {
                setTimeout(() => {
                    setLoading(false);
                    navigate("/success");
                }, 2000);
            }
        }
    };

    return (
        <form onSubmit={registerFormData}>
            <div className="mx-auto w-full lg:w-80 flex flex-col justify-center items-center gap-y-10">
                <input
                    type="text"
                    name="username"
                    placeholder='Username'
                    required
                    className='w-80 h-16 border rounded-full px-4 text-md font-medium text-neutral-500 focus:outline-0 focus:border-secondary_hover focus:bg-secondary_hover'
                    onChange={(e) => setUsername(e.target.value)}
                />
                <div className='flex flex-col gap-y-3'>
                    <input
                        type="text"
                        name="email"
                        required
                        placeholder="Email"
                        className={`w-80 h-16 rounded-full border ${error.status && error.isFormValidationError && error.inputType === "email" ? 'border-red-600' : ""} px-4 text-md font-medium text-neutral-500 focus:outline-0 focus:border-secondary_hover focus:bg-secondary_hover`}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error.status ? <div className="w-full flex justify-start items-center gap-x-2">
                        <div className="w-2 h-2 rounded-full bg-red-600" />
                        <span className='text-red-600 font-bold text-sm'>{error.message}</span>
                    </div> : ""}
                </div>

                <button
                    id="submitBtn"
                    type='submit'
                    className='transition-all duration-500 w-80 h-16 rounded-full px-3 text-md text-white bg-primary hover:bg-primary_hover'
                >
                    {loading ? <div className="w-full flex justify-center items-center">
                        <div className='w-7 h-7 animate-spin'>
                            <Icons.Loader />
                        </div>
                    </div> : "Submit"}
                </button>
            </div>
        </form>
    )
}

export default RegisterForm;
