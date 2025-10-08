import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

// 使用 `output: 'static'` 渲染模式时，需添加的配置：
export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!email || !password) {
        return new Response("邮箱和密码不能为空", { status: 400 });
    }

    const { error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        return new Response(error.message, { status: 500 });
    }

    return redirect("/signin");
};