<?php

return [

    'accepted' => ':attribute を承認してください。',
    'accepted_if' => ':other が :value のとき、:attribute を承認してください。',
    'active_url' => ':attribute は有効なURLではありません。',
    'after' => ':attribute は :date より後の日付でなければなりません。',
    'after_or_equal' => ':attribute は :date 以降の日付でなければなりません。',
    'alpha' => ':attribute は英字のみで入力してください。',
    'alpha_dash' => ':attribute は英数字、ダッシュ、アンダースコアのみ使用できます。',
    'alpha_num' => ':attribute は英数字のみ使用できます。',
    'array' => ':attribute は配列でなければなりません。',
    'before' => ':attribute は :date より前の日付でなければなりません。',
    'before_or_equal' => ':attribute は :date 以前の日付でなければなりません。',
    
    'between' => [
        'array' => ':attribute は :min 個から :max 個までの項目を持たなければなりません。',
        'file' => ':attribute は :min KBから :max KBまでのファイルでなければなりません。',
        'numeric' => ':attribute は :min から :max までの数字でなければなりません。',
        'string' => ':attribute は :min 文字から :max 文字までで入力してください。',
    ],

    'boolean' => ':attribute は true または false を指定してください。',
    'confirmed' => ':attribute の確認が一致しません。',
    'date' => ':attribute は有効な日付ではありません。',
    'date_format' => ':attribute は :format 形式と一致しません。',
    'different' => ':attribute と :other には異なる値を指定してください。',
    'digits' => ':attribute は :digits 桁で入力してください。',
    'digits_between' => ':attribute は :min 桁から :max 桁で入力してください。',
    'email' => ':attribute は有効なメールアドレス形式で入力してください。',
    
    'exists' => '選択された :attribute は無効です。',
    'file' => ':attribute はファイルでなければなりません。',
    'filled' => ':attribute は値が必要です。',
    
    'gt' => [
        'numeric' => ':attribute は :value より大きい必要があります。',
        'string' => ':attribute は :value 文字より多く入力してください。',
    ],

    'gte' => [
        'numeric' => ':attribute は :value 以上でなければなりません。',
        'string' => ':attribute は :value 文字以上で入力してください。',
    ],

    'image' => ':attribute は画像ファイルでなければなりません。',
    'in' => '選択された :attribute は無効です。',
    'integer' => ':attribute は整数で入力してください。',
    'ip' => ':attribute は有効な IP アドレスで入力してください。',
    'json' => ':attribute は JSON 形式の文字列でなければなりません。',
    
    'max' => [
        'array' => ':attribute は :max 個以下でなければなりません。',
        'file' => ':attribute は :max KB以下のファイルでなければなりません。',
        'numeric' => ':attribute は :max 以下でなければなりません。',
        'string' => ':attribute は :max 文字以内で入力してください。',
    ],

    'min' => [
        'array' => ':attribute は :min 個以上の項目が必要です。',
        'file' => ':attribute は :min KB以上のファイルでなければなりません。',
        'numeric' => ':attribute は :min 以上でなければなりません。',
        'string' => ':attribute は :min 文字以上で入力してください。',
    ],

    'not_in' => '選択された :attribute は無効です。',
    'numeric' => ':attribute は数字で入力してください。',
    'regex' => ':attribute の形式が正しくありません。',
    'required' => ':attribute は必須です。',
    
    'same' => ':attribute と :other が一致しなければなりません。',

    'size' => [
        'array' => ':attribute は :size 個含む必要があります。',
        'file' => ':attribute は :size KBでなければなりません。',
        'numeric' => ':attribute は :size でなければなりません。',
        'string' => ':attribute は :size 文字でなければなりません。',
    ],

    'string' => ':attribute は文字列で入力してください。',
    'unique' => ':attribute はすでに使用されています。',
    'url' => ':attribute は有効なURL形式で入力してください。',

    'attributes' => [
        'name' => '名前',
        'email' => 'メールアドレス',
    ],

];
