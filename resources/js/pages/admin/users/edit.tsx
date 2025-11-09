import AppLayout from '@/layouts/app-layout';
import { Head, Link, usePage, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { TextInput, RadioGroup, DisplayField, DateInput } from '@/components/form';
import type { User } from '@/types/user';
import { formatRole, formatSex } from '@/utils/format';

export default function EditUser() {
  const { user } = usePage().props as { user: User };
  const route = window.route;

  const { data, setData, put, processing, errors } = useForm({
    name: user.name,
    email: user.email,
    role: user.role,
    sex: user.sex,
    birthday: user.birthday,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    put(route('admin.users.update', user.id));
  };

  return (
    <AppLayout
      breadcrumbs={[
        { title: 'Users', href: route('admin.users.index') },
        { title: '編集' },
      ]}
    >
      <Head title={`編集 - ${user.name}`} />

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

        <RadioGroup
          label="権限"
          value={data.role}
          error={errors.role}
          onChange={(v) => setData('role', v)}
          options={[
            { label: formatRole(1), value: 1 },
            { label: formatRole(2), value: 2 },
          ]}
        />

        <RadioGroup
          label="性別"
          value={data.sex}
          error={errors.sex}
          onChange={(v) => setData('sex', v)}
          options={[
            { label: formatSex(0), value: 0 },
            { label: formatSex(1), value: 1 },
            { label: formatSex(2), value: 2 },
          ]}
        />

        <DisplayField label="生年月日" value={data.birthday ? data.birthday.substring(0, 10) : '未設定'} />

        <div className="flex gap-4">
          <Button type="submit" variant="default" size="default" disabled={processing}>
            更新
          </Button>

          <Button variant="outline" asChild>
            <Link href={route('admin.users.index')}>戻る</Link>
          </Button>
        </div>
      </form>
    </AppLayout>
  );
}
