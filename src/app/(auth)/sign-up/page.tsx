"use client"
import React from 'react'
import { Icons } from '../../../components/Icons';
import Link from 'next/link';
import { buttonVariants, Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';
import { AuthCredentialsValidator, TAuthCredentialsValidator } from '@/lib/validators/account-credentials-validators';

const Signup = () => {



    const { register,
        handleSubmit,
        formState: { errors } } = useForm<TAuthCredentialsValidator>({
            resolver: zodResolver(AuthCredentialsValidator)
        });

    const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
        
    }
    return (
        <>
            <div className='container relative flex pt-20 flex-col items-center justify-center lg:px:0'>
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className='flex flex-col items-center space-y-2 text-center '>
                        <Icons.logo className='h-20 w-20' />
                        <h1 className='text-2xl font-bold'>Create an account</h1>
                        <Link href='/sign-in' className={buttonVariants({
                            variant: 'link',
                            className: 'gap-1.5'
                        })}>
                            Already have an account? Sign-in
                            <ArrowRight className='h-4 w-4' />
                        </Link>
                    </div>

                    <div className="grid gap-6 ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid gap-2">
                                <div className='grid gap-1 py-2'>
                                    <Label htmlFor='email' className='my-1'>Email</Label>
                                    <Input
                                        {...register("email")}
                                        className={cn({
                                            "focus-visible:ring-red-500": errors.email
                                        })}
                                        placeholder='you@example.com'
                                    />
                                </div>

                                <div className='grid gap-1 py-2'>
                                    <Label htmlFor='password' className='my-1'>Password</Label>
                                    <Input className={cn({
                                        "focus-visible:ring-red-500": errors.password
                                    })}
                                        {...register("password")}

                                        placeholder='Enter your password'
                                    />
                                </div>
                                <Button>Sign up</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup