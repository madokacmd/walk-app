import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';
import { formatRole, formatDate } from '@/utils/format';
import { router } from '@inertiajs/react';
const route = window.route;


export default function UserIndex() {
  const { users } = usePage().props;

  return (
    <AppLayout
      breadcrumbs={[
        { title: 'ユーザー一覧', href: route('admin.users.index') },
      ]}
    >
      <Head title="ユーザー一覧" />

      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b bg-gray-100 dark:bg-neutral-800">
            <th className="p-2 text-left">ID</th>
            <th className="p-2 text-left">名前</th>
            <th className="p-2 text-left">権限</th>
            <th className="p-2 text-left">登録日</th>
          </tr>
        </thead>
        <tbody>
          {users.data.map((user) => (
            <tr onClick={() => router.visit(route('admin.users.show', user.id))} 
              key={user.id} className="border-b hover:bg-gray-50 dark:hover:bg-neutral-700">
              <td className="p-2">{user.id}</td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{formatRole(user.role)}</td>
              <td className="p-2">{formatDate(user.created_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AppLayout>
  );
}
