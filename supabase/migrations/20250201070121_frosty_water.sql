/*
  # Create leads table for storing customer inquiries

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `contact` (text, required)
      - `location` (text)
      - `monthly_bill` (numeric)
      - `system_size` (numeric)
      - `total_cost` (numeric)
      - `monthly_payment` (numeric)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `leads` table
    - Add policy for authenticated users to read all leads
    - Add policy for anyone to insert leads (to allow unauthenticated form submissions)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  contact text NOT NULL,
  location text,
  monthly_bill numeric,
  system_size numeric,
  total_cost numeric,
  monthly_payment numeric,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);