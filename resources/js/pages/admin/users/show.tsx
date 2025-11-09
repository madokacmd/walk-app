import AppLayout from '@/layouts/app-layout';
import { Head, Link, usePage, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import type { User } from '@/types/user';
import { formatRole, formatSex, formatDate } from '@/utils/format';

export default function UserShow() {
  const { user } = usePage().props as { user : User };
  const route = window.route;

  const handleDelete = () => {
    if (!confirm('本当に削除しますか？')) return;
    router.delete(route('admin.users.destroy', user.id));
  };

  return (
    <AppLayout
      breadcrumbs={[
        { title: 'Users', href: route('admin.users.index') },
        { title: user.name },
      ]}
    >
      <Head title={`${user.name} - 詳細`} />

      <div className="space-y-6 p-6">
        <h1 className="text-2xl font-bold">{user.name}</h1>

        <div className="border border-sidebar-border dark:border-sidebar-border rounded-lg p-4 space-y-2">
          <p><span className="font-semibold">ID:</span> {user.id}</p>
          <p><span className="font-semibold">メール:</span> {user.email}</p>
          <p><span className="font-semibold">権限:</span> {formatRole(user.role)}</p>
          <p><span className="font-semibold">性別:</span> {formatSex(user.sex)}</p>
          <p><span className="font-semibold">生年月日:</span> {user.birthday ? formatDate(user.birthday) : '未設定'}</p>
          <p><span className="font-semibold">登録日:</span> {formatDate(user.created_at)}</p>
        </div>

        <div className="flex gap-4">
          <Button asChild>
            <Link href={route('admin.users.edit', user.id)}>編集</Link>
          </Button>

          <Button variant="destructive" onClick={handleDelete}>
            削除
          </Button>

          <Button variant="outline" asChild>
            <Link href={route('admin.users.index')}>戻る</Link>
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}
