export const EnvConfiguration = () => {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

    // Validate that required environment variables are set
    if (!supabaseUrl) {
        throw new Error('SUPABASE_URL environment variable is not set');
    }
    if (!supabaseAnonKey) {
        throw new Error('SUPABASE_ANON_KEY environment variable is not set');
    }
    if (!supabaseServiceKey) {
        throw new Error('SUPABASE_SERVICE_KEY environment variable is not set');
    }

    return {
        supabase: {
            url: supabaseUrl,
            key: supabaseAnonKey,
            serviceKey: supabaseServiceKey,
        },
    };
}; 