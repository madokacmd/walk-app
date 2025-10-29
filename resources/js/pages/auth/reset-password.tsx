import { useForm, Link, usePage } from '@inertiajs/react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ResetPassword() {
    const { props } = usePage();
    const { token, email: defaultEmail } = props as { token: string; email?: string };

    const { data, setData, post, processing, errors } = useForm({
        token: token || '',
        email: defaultEmail || '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('password.update'));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-center">
                        新しいパスワードを設定
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* メール */}
                        <div>
                            <Label htmlFor="email">メールアドレス</Label>
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

                        {/* 新しいパスワード */}
                        <div>
                            <Label htmlFor="password">新しいパスワード</Label>
                            <Input
                                id="password"
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            {errors.password && (
                                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>

                        {/* 確認用パスワード */}
                        <div>
                            <Label htmlFor="password_confirmation">パスワード（確認）</Label>
                            <Input
                                id="password_confirmation"
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData('password_confirmation', e.target.value)
                                }
                                required
                            />
                            {errors.password_confirmation && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.password_confirmation}
                                </p>
                            )}
                        </div>

                        <Button
                            disabled={processing}
                            className="w-full mt-4"
                        >
                            パスワードを更新
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
