import { useForm, Link, usePage } from '@inertiajs/react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ForgotPassword() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const { props } = usePage();
    const status = props.status as string | undefined;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-center">
                        パスワード再設定メールを送信
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {status && (
                        <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-sm text-center">
                            {status}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="email">登録メールアドレス</Label>
                            <Input
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                            {errors.email && (
                                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        <Button
                            disabled={processing}
                            className="w-full mt-4"
                        >
                            メールを送信
                        </Button>
                    </form>

                    <div className="mt-6 text-sm text-center">
                        <Link
                            href={route('login')}
                            className="text-blue-600 underline"
                        >
                            ログイン画面に戻る
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
