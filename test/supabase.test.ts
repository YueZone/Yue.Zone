import { test } from 'vitest';
import { supabase } from '../src/lib/supabase';

test('Supabase', async () => {
    console.log("SUPABASE_URL:", import.meta.env.VITE_SUPABASE_URL)

    const { data, error } = await supabase.auth.signInAnonymously();
    console.log("data:", data)
    console.error("error:", error)
});