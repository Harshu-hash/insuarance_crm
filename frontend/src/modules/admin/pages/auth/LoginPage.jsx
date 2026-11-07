import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Shield, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAuthStore } from '../../../../app/store/auth.store';
import Button from '../../../../components/ui/Button';
import Input from '../../../../components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/ui/Card';
import { toast } from 'sonner';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Mock successful login
      if (data.email === 'admin@admin.com' && data.password === '123456') {
        login(
          { 
            id: 1, 
            name: 'Super Admin', 
            email: data.email, 
            role: 'SuperAdmin',
            permissions: ['users.read', 'claims.approve', 'finance.read'] // etc
          },
          'mock-access-token-123',
          'mock-refresh-token-456'
        );
        toast.success('Successfully logged in!');
      } else {
        toast.error('Invalid credentials (Try admin@admin.com / 123456)');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="h-12 w-12 bg-primary rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-text-primary tracking-tight">Admin Portal</h1>
          <p className="text-text-secondary text-sm">Sign in to manage the insurance system</p>
        </div>

        <Card className="border-none shadow-xl shadow-slate-200/50">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-xl">Login</CardTitle>
            <p className="text-xs text-text-secondary">Enter your credentials below to access your account</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-primary">Email Address</label>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  {...register('email')}
                  error={errors.email?.message}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-text-primary">Password</label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    {...register('password')}
                    error={errors.password?.message}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full mt-2"
                isLoading={isLoading}
              >
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Helper text for demo */}
        <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
          <p className="text-xs text-primary font-medium mb-1">Demo Credentials:</p>
          <p className="text-xs text-text-secondary">Email: <span className="font-mono">admin@admin.com</span></p>
          <p className="text-xs text-text-secondary">Pass: <span className="font-mono">123456</span></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
