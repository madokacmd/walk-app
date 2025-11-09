import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { TextInput, DateInput, RadioGroup } from '@/components/form';

export default function CreateUser() {
  const route = window.route;

  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
    role: 1,
    sex: 0,
    birthday: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('admin.users.store'));
  };

  return (
    <AppLayout
      breadcrumbs={[
        { title: 'Users', href: route('admin.users.index') },
        { title: '作成' },
      ]}
    >
      <Head title="ユーザー作成" />

      <form onSubmit={handleSubmit} className="space-y-6 p-6 max-w-lg">
        <TextInput
          label="名前"
          value={data.name}
          error={errors.name}
          onChange={(v) => setData('name', v)}
        />

        <TextInput
          label="メール"
          type="email"
          value={data.email}
          error={errors.email}
          onChange={(v) => setData('email', v)}
        />

        <TextInput
          label="パスワード"
          type="password"
          value={data.password}
          error={errors.password}
          onChange={(v) => setData('password', v)}
        />

        <RadioGroup
          label="権限"
          value={data.role}
          error={errors.role}
          onChange={(v) => setData('role', v)}
          options={[
            { label: '一般', value: 1 },
            { label: '管理者', value: 2 },
          ]}
        />

        <RadioGroup
          label="性別"
          value={data.sex}
          error={errors.sex}
          onChange={(v) => setData('sex', v)}
          options={[
            { label: '無回答', value: 0 },
            { label: '男性', value: 1 },
            { label: '女性', value: 2 },
          ]}
        />

        <DateInput
          label="生年月日"
          value={data.birthday}
          error={errors.birthday}
          onChange={(v) => setData('birthday', v)}
        />

        <div className="flex gap-4">
          <Button type="submit" variant="default" size="default" disabled={processing}>
            作成
          </Button>

          <Button variant="outline" asChild>
            <Link href={route('admin.users.index')}>戻る</Link>
          </Button>
        </div>
      </form>
    </AppLayout>
  );
}

