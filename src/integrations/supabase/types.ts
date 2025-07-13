export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      bookings: {
        Row: {
          created_at: string
          end_time: string
          facility_id: string
          id: string
          notes: string | null
          start_time: string
          status: string | null
          total_amount: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          end_time: string
          facility_id: string
          id?: string
          notes?: string | null
          start_time: string
          status?: string | null
          total_amount?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          end_time?: string
          facility_id?: string
          id?: string
          notes?: string | null
          start_time?: string
          status?: string | null
          total_amount?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookings_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "facilities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          created_at: string | null
          file_size: number
          file_type: string
          file_url: string
          id: string
          name: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          file_size: number
          file_type: string
          file_url: string
          id?: string
          name: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          file_size?: number
          file_type?: string
          file_url?: string
          id?: string
          name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      drawings: {
        Row: {
          created_at: string | null
          current_entries: number | null
          description: string | null
          end_date: string
          entry_amount: number
          entry_limit: number
          id: string
          image_url: string | null
          quiz_type: Database["public"]["Enums"]["quiz_type"]
          start_date: string
          status: Database["public"]["Enums"]["drawing_status"] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          current_entries?: number | null
          description?: string | null
          end_date: string
          entry_amount: number
          entry_limit: number
          id?: string
          image_url?: string | null
          quiz_type: Database["public"]["Enums"]["quiz_type"]
          start_date: string
          status?: Database["public"]["Enums"]["drawing_status"] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          current_entries?: number | null
          description?: string | null
          end_date?: string
          entry_amount?: number
          entry_limit?: number
          id?: string
          image_url?: string | null
          quiz_type?: Database["public"]["Enums"]["quiz_type"]
          start_date?: string
          status?: Database["public"]["Enums"]["drawing_status"] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      entries: {
        Row: {
          created_at: string | null
          drawing_id: string
          id: string
          order_number: string
          payment_amount: number
          payment_status: string | null
          quiz_passed: boolean
          quiz_score: number
          user_id: string
        }
        Insert: {
          created_at?: string | null
          drawing_id: string
          id?: string
          order_number: string
          payment_amount: number
          payment_status?: string | null
          quiz_passed: boolean
          quiz_score: number
          user_id: string
        }
        Update: {
          created_at?: string | null
          drawing_id?: string
          id?: string
          order_number?: string
          payment_amount?: number
          payment_status?: string | null
          quiz_passed?: boolean
          quiz_score?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "entries_drawing_id_fkey"
            columns: ["drawing_id"]
            isOneToOne: false
            referencedRelation: "drawings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entries_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      facilities: {
        Row: {
          address: string | null
          amenities: string[] | null
          capacity: number | null
          city: string | null
          created_at: string
          description: string | null
          email: string | null
          facility_type: string | null
          id: string
          name: string
          owner_id: string | null
          phone: string | null
          state: string | null
          status: string | null
          updated_at: string
          website: string | null
          zip_code: string | null
        }
        Insert: {
          address?: string | null
          amenities?: string[] | null
          capacity?: number | null
          city?: string | null
          created_at?: string
          description?: string | null
          email?: string | null
          facility_type?: string | null
          id?: string
          name: string
          owner_id?: string | null
          phone?: string | null
          state?: string | null
          status?: string | null
          updated_at?: string
          website?: string | null
          zip_code?: string | null
        }
        Update: {
          address?: string | null
          amenities?: string[] | null
          capacity?: number | null
          city?: string | null
          created_at?: string
          description?: string | null
          email?: string | null
          facility_type?: string | null
          id?: string
          name?: string
          owner_id?: string | null
          phone?: string | null
          state?: string | null
          status?: string | null
          updated_at?: string
          website?: string | null
          zip_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "facilities_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          address: string | null
          city: string | null
          created_at: string | null
          email: string
          general_instructions: string | null
          id: string
          name: string | null
          phone: string | null
          state: string | null
          updated_at: string | null
          zip_code: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          created_at?: string | null
          email: string
          general_instructions?: string | null
          id: string
          name?: string | null
          phone?: string | null
          state?: string | null
          updated_at?: string | null
          zip_code?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          created_at?: string | null
          email?: string
          general_instructions?: string | null
          id?: string
          name?: string | null
          phone?: string | null
          state?: string | null
          updated_at?: string | null
          zip_code?: string | null
        }
        Relationships: []
      }
      proposals: {
        Row: {
          created_at: string
          id: number
          job_description: string | null
          job_title: string | null
          proposal: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          job_description?: string | null
          job_title?: string | null
          proposal?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          job_description?: string | null
          job_title?: string | null
          proposal?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      quiz_questions: {
        Row: {
          correct_answer: string
          created_at: string | null
          id: string
          option_a: string
          option_b: string
          option_c: string
          option_d: string
          question: string
          quiz_type: Database["public"]["Enums"]["quiz_type"]
        }
        Insert: {
          correct_answer: string
          created_at?: string | null
          id?: string
          option_a: string
          option_b: string
          option_c: string
          option_d: string
          question: string
          quiz_type: Database["public"]["Enums"]["quiz_type"]
        }
        Update: {
          correct_answer?: string
          created_at?: string | null
          id?: string
          option_a?: string
          option_b?: string
          option_c?: string
          option_d?: string
          question?: string
          quiz_type?: Database["public"]["Enums"]["quiz_type"]
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          facility_id: string | null
          id: string
          role: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          facility_id?: string | null
          id?: string
          role: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          facility_id?: string | null
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "facilities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_order_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["user_role"]
        }
        Returns: boolean
      }
      owns_facility: {
        Args: { _user_id: string; _facility_id: string }
        Returns: boolean
      }
    }
    Enums: {
      drawing_status: "upcoming" | "active" | "completed" | "cancelled"
      quiz_type: "basic_watch_knowledge" | "luxury_brands" | "watch_mechanics"
      user_role: "admin" | "facility_owner" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      drawing_status: ["upcoming", "active", "completed", "cancelled"],
      quiz_type: ["basic_watch_knowledge", "luxury_brands", "watch_mechanics"],
      user_role: ["admin", "facility_owner", "user"],
    },
  },
} as const
