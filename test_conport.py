#!/usr/bin/env python3
"""Simple ConPort test script"""

import subprocess
import sys

def test_conport():
    """Test ConPort installation and basic functionality"""
    print("🧪 Testing ConPort Installation...")
    
    try:
        # Test ConPort help command
        result = subprocess.run([
            "uvx", "--from", "context-portal-mcp", "conport-mcp", "--help"
        ], capture_output=True, text=True, timeout=10)
        
        if result.returncode == 0:
            print("✅ ConPort MCP server is installed and accessible")
            print(f"📋 Help output preview: {result.stdout[:200]}...")
            return True
        else:
            print(f"❌ ConPort help command failed: {result.stderr}")
            return False
            
    except subprocess.TimeoutExpired:
        print("❌ ConPort command timed out")
        return False
    except Exception as e:
        print(f"❌ Error testing ConPort: {e}")
        return False

def main():
    print("🚀 ConPort Installation Test")
    print("=" * 40)
    
    if test_conport():
        print("\n🎉 ConPort is ready for use!")
        print("\n📋 Next Steps:")
        print("1. ConPort MCP server needs to be started through an IDE or MCP client")
        print("2. Once running, ConPort tools will be available for data import")
        print("3. Use the prepared data in CONPORT_INITIALIZATION_DATA.md")
        return True
    else:
        print("\n❌ ConPort test failed")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
