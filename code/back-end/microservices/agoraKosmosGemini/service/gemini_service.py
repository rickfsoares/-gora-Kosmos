import os
import google.generativeai as genai


class Gemini:
    def __init__(self) -> None:
        genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))
        self.model = genai.GenerativeModel('gemini-1.5-flash')

    def generate(self, prompt):
        return self.model.generate_content(prompt).text
    
    
    
