import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.SUPABASE_URL as string
const supabaseKey = import.meta.env.SUPABASE_KEY as string

export const supabase = createClient(supabaseUrl, supabaseKey)
