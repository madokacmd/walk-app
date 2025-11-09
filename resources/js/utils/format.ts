export const formatRole = (role: number): string => {
  return role === 1 ? '一般' : '管理者';
};

export const formatSex = (sex: number): string => {
  switch (sex) {
    case 1:
      return '男性';
    case 2:
      return '女性';
    default:
      return '無回答';
  }
};

export const formatDate = (date: string | null): string => {
  if (!date) return '未設定';
  return date.substring(0, 10); // YYYY-MM-DD
};
